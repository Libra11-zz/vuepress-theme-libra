<template>
  <div class="footer">
    <div class="left">
      <div class="wave-libra">
        <div class="wavetext">
          <div class="coast delay">
            <div class="wave-rel-wrap">
              <div class="wave delay"></div>
            </div>
          </div>
          <div class="text text-l">L</div>
          <div class="text text-i">i</div>
          <div class="text text-b">b</div>
          <div class="text text-r">r</div>
          <div class="text text-a">a</div>
        </div>
      </div>
    </div>
    <div class="right">
      {{ $themeConfig.footer.copyright }}
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import "@theme/common/color.less";
.footer {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  .left {
    .wave-libra {
      display: flex;
      margin-bottom: 0.2rem;
      justify-content: flex-start;
      align-items: center;
      .wavetext {
        .text {
          color: @whiteColor;
          font-size: 1rem;
          font-weight: 100;
          display: inline-block;
          animation: text 1050ms ease-in infinite;
          transform: translatez(0);
          &-l {
            left: 0rem;
            transform: translate3d(0, -0.3rem, 0);
            animation: text-w 1050ms ease-in infinite;
          }
          &-i {
            left: 0.6rem;
            animation-delay: 130ms;
          }
          &-b {
            left: 0.9rem;
            animation-delay: 210ms;
          }
          &-r {
            left: 1.6rem;
            animation-delay: 290ms;
          }
          &-a {
            left: 2rem;
            animation-delay: 350ms;
          }
        }
        .coast {
          width: 0.2rem;
          height: 0.2rem;
          display: inline-block;
          animation: coast 2100ms linear infinite;
          transform: translateZ(0);
        }

        .wave-rel-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          perspective: 3rem;
          perspective-origin: 0%, 50%;
        }

        .wave {
          // wave: width && scale && rotate
          position: absolute;
          width: 0.2rem;
          height: 0.2rem;
          border-radius: 1.1rem;
          background: radial-gradient(
            ellipse at center,
            rgba(116, 241, 252, 1) 0%,
            rgba(50, 230, 255, 1) 73%,
            rgba(21, 199, 250, 1) 100%
          );
          display: inline-block;
          animation: wave 2100ms linear infinite;
          will-change: width;
          transform: translateZ(0) scale(0);
        }

        .delay {
          animation-delay: 2100ms / 2;
        }

        @keyframes text {
          0% {
            transform: translate3d(0, 0, 0);
          }
          30% {
            transform: translate3d(0, 0, 0);
          }
          45% {
            transform: translate3d(0, -0.3rem, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes text-w {
          0% {
            transform: translate3d(0, -0.3rem, 0);
          }
          38% {
            transform: translate3d(0, -0.3rem, 0);
          }
          69% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(0, -0.3rem, 0);
          }
        }

        @keyframes coast {
          0% {
            transform: translate3d(0, 0, 0);
          }
          23% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(2rem, 0, 0);
          }
          100% {
            transform: translate3d(2rem, 0, 0);
          }
        }

        @keyframes wave {
          0% {
            transform: scale(0);
            width: 0.2rem;
          }
          10% {
            transform: scale(1);
          }
          23% {
            width: 0.2rem;
          }
          32% {
            width: 0.5rem;
          }
          42% {
            width: 0.3rem;
            transform: rotateY(0deg) scale(1, 1);
          }
          51% {
            transform: rotateY(90deg) scale(0.6, 0.2);
          }
          52% {
            transform: rotateY(90deg) scale(0);
          }
          100% {
            transform: rotateY(90deg) scale(0);
          }
        }
      }
    }
  }
  .right {
    position: relative;
    color: @whiteColor4;
    transition: 0.5s all;
    font-size: 0.8rem;
    font-weight: 100;
    @media (max-width: 992px) {
      font-size: 0.7rem;
    }
    &:hover {
      color: @whiteColor;
    }
  }
}
</style>
