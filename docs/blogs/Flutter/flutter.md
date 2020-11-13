---
tag: flutter
category: flutter
desc: Flutter整洁架构构建与测试驱动开发
title: 【译】Flutter整洁架构构建与测试驱动开发（三）
date: "2020-10-16"
Update: "2019-10-18"
picture: https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/flutter_clean_4.png
---

# 【译】`Flutter`整洁架构构建与测试驱动开发（三）

我们的`Number Trivia`应用程序进展顺利。 在上一部分中，我们使用测试驱动的开发创建了一个实体，存储库合同和第一个用例-`GetConcreteNumberTrivia`。 今天，我们将添加另一个用例。

## 可调用类

您是否知道在`Dart`中，既可以通过调用`object.call()`,同样也可以通过`object()`来运行名为`call`的方法。 这是在用例中使用的完美方法！ 毕竟，它们的类名已经是诸如`GetConcreteNumberTrivia`之类的动词，因此将它们用作“伪方法”非常合适。

> 如果类实现了`call()`方法，则该类的对象可以作为方法使用

本着`TDD`的精神，我们将首先修改测试`get_concrete_number_test.dart`，使其不再调用`execute`方法：

```dart
final result = await usecase(number: tNumber);
```

而且由于代码甚至无法编译，因此我们可以立即修改`GetConcreteNumberTrivia`类：

```dart
Future<Either<Failure, NumberTrivia>> call({ ...
```

## 添加另一个用例

除了获取具体数字之外，我们的应用还将获取随机数字。 这意味着我们需要另一个用例-`GetRandomNumberTrivia`。 实际上，我们使用的`Numbers API`对于具体的数字和随机数具有不同的`API`，因此我们不会自己生成数字。我们将在`GetRandomNumberTrivia`用例中在域层内部精确执行数字生成代码。 毕竟，生成数字是一种业务逻辑。

### 用例基类

作为干净的编码人员，我们当然希望代码具有可预测的接口。基本上具有相同功能的类的公共方法和属性应具有标准化名称。

对于用例，每个用例都应该有一个调用方法。用例中的逻辑让我们获得随机数字或向月球发送航天飞机，这些都无关紧要，界面应该相同，以免造成任何混乱。

防止一个类具有`call`方法而另一个具有`execute`方法的另一种方法是提供一个显式的接口（在`Dart`的情况下为一个抽象类），该接口是令人难忘的。例如，类似于`UseCase`基类。

由于可以在应用程序的多个功能之间共享此类，因此以下代码将进入核心/用例。当然，测试抽象类没有任何意义，因此我们可以立即编写它。

```dart
// usecases.dart
import 'package:clean_architecture_tdd/core/error/failures.dart';
import 'package:dartz/dartz.dart';
import 'package:equatable/equatable.dart';

// 必须将参数放入容器对象中，以便可以包含在此抽象基类方法定义中。
abstract class UseCase<Type, Params> {
  Future<Either<Failures, Type>> call(Params params);
}

// 每当用例不接受任何参数时，调用用例的代码将使用此方法。
class NoParams extends Equatable {}

```

### 继承基类

如您所见，我们向`UseCase`类添加了两个类型参数。 一种是针对“无错误”的返回类型，在我们的应用中，该类型为`NumberTrivia`实体。 另一个类型参数`Params`将在已经存在的`GetConcreteNumberTrivia`用例中引起一些小的代码更改。

每个`UseCase`子类都将在同一文件内单独定义参数类，用于向`call`方法传递。处理类工作的其他更改只有在更新测试后才会出现。

```dart
// get_concrete_number_trivia.dart
class GetConcreteNumberTrivia extends UseCase<NumberTrivia, Params> {
  ...
}

class Params extends Equatable {
  final int number;

  Params({@required this.number}) : super([number]);
}
```

现在我们知道调用必须接受一个`Params`对象，而不是直接将整数作为参数。 因此，由于我们在上一部分中编写了一个测试，因此我们要做的就是：

- 更新测试以使用参数。
- 它不会编译。

```dart
// get_concrete_number_trivia_test.dart
...
test(
  'should get trivia for the number from the repository',
  () async {
    // arrange
    when(mockNumberTriviaRepository.getConcreteNumberTrivia(any))
        .thenAnswer((_) async => Right(tNumberTrivia));
    // act
    final result = await usecase(Params(number: tNumber));
    // assert
    expect(result, Right(tNumberTrivia));
    verify(mockNumberTriviaRepository.getConcreteNumberTrivia(tNumber));
    verifyNoMoreInteractions(mockNumberTriviaRepository);
  },
);
```

- 更新生产代码。 使用`Params`作为调用方法的参数。
- 运行测试-它应该通过，代码置信度可以通过。

```dart
// get_concrete_number_trivia.dart
class GetConcreteNumberTrivia extends UseCase<NumberTrivia, Params> {
  ...
  @override
  Future<Either<Failure, NumberTrivia>> call(Params params) async {
    return await repository.getConcreteNumberTrivia(params.number);
  }
}
...
```

### `GetRandomNumberTrivia`

现在，添加这个新用例非常简单-我们已经统一了每个`UseCase`必须具有的接口。 同样，由于`Number Trivia App`的简单性质，此新用例将仅从存储库中获取数据。

我们再次从编写测试开始-在`test /.../ usecases`文件夹中创建一个新文件。 对于先前的用例，大多数代码是从测试中复制的。

```dart
// get_random_number_trivia_test.dart
import 'package:clean_architecture_tdd/core/usecases.dart';
import 'package:clean_architecture_tdd/features/number_trivia/domain/entities/number_trivia.dart';
import 'package:dartz/dartz.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:mockito/mockito.dart';
import 'package:clean_architecture_tdd/features/number_trivia/domain/repositories/number_trivia_repository.dart';

class MockNumberTriviaRepository extends Mock
    implements NumberTriviaRepository {}

void main() {
  GetRandomNumberTrivia usecase;
  MockNumberTriviaRepository mockNumberTriviaRepository;

  setUp(() {
    mockNumberTriviaRepository = MockNumberTriviaRepository();
    usecase = GetRandomNumberTrivia(mockNumberTriviaRepository);
  });
  final tNumberTrivia = NumberTrivia(number: 1, text: 'test');

  test(
    'should get trivia from the repository',
    () async {
      when(mockNumberTriviaRepository.getRandomNumberTrivia())
          .thenAnswer((_) async => Right(tNumberTrivia));
      // 由于随机数不需要任何参数，因此我们传入NoParams。
      final result = await usecase(NoParams());
      expect(result, Right(tNumberTrivia));
      verify(mockNumberTriviaRepository.getRandomNumberTrivia());
      verifyNoMoreInteractions(mockNumberTriviaRepository);
    },
  );
}
```

当然，现在该测试失败，因为`GetRandomNumberTrivia`还没有实现，实现如下：

```dart
// get_random_number_trivia.dart
import 'package:clean_architecture_tdd/core/error/failures.dart';
import 'package:clean_architecture_tdd/core/usecases.dart';
import 'package:clean_architecture_tdd/features/number_trivia/domain/entities/number_trivia.dart';
import 'package:clean_architecture_tdd/features/number_trivia/domain/repositories/number_trivia_repository.dart';
import 'package:dartz/dartz.dart';

class GetRandomNumberTrivia extends UseCase<NumberTrivia, NoParams> {
  final NumberTriviaRepository repository;

  GetRandomNumberTrivia(this.repository);

  @override
  Future<Either<Failures, NumberTrivia>> call(NoParams params) async {
    return await repository.getRandomNumberTrivia();
  }
}
```

现在，该测试将通过，并且我们已经完全实现了`Number Trivia App`的域层。 在下一部分中，我们将开始在包含`Repository`实现和数据源的数据层上工作。

[原文地址](https://resocoder.com/2019/09/02/flutter-tdd-clean-architecture-course-3-domain-layer-refactoring/)
