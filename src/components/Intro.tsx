import { useEffect } from 'react';
import { useRef } from 'react';
class IntersectionObserverList {
    mapping: Map<Element, (isIntersecting: boolean) => void>;
    observer: IntersectionObserver;
  
    constructor() {
      this.mapping = new Map();
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const callback = this.mapping.get(entry.target);
            callback && callback(entry.isIntersecting);
          }
        },
        {
          rootMargin: '300px 0px 300px 0px',
        }
      );
    }
  
    add(element: Element, callback: (isIntersecting: boolean) => void) {
      this.mapping.set(element, callback);
      this.observer.observe(element);
    }
  
    remove(element: Element) {
      this.mapping.delete(element);
      this.observer.unobserve(element);
    }
  }

const IndexPage = () => {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserverList();

    window.addEventListener('mousemove', (e) => {
      if (ringRef.current) {
        ringRef.current.style.transform = `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`;
      }
    });

    document.querySelectorAll('[data-animate="true"]').forEach((element) => {
      const observerCallback = (isIntersecting: boolean) => {
        if (isIntersecting) {
          element.classList.add('animate-slide-down');
        } else {
          element.classList.remove('animate-slide-down');
        }
      };

      observer.add(element as Element, observerCallback);

      return () => {
        observer.remove(element as Element);
      };
    });
  }, []);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#portfolio">About Me</a>
            </li>
            <li>
              <a href="#motto">Motto</a>
            </li>
            <li>
              <a href="#achieve">Achieve</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="portfolio">
        <h2 data-animate={true}>Welcome 🙌🏻 Developer DaYeon&#39;s Portfolio.</h2>
        <br />
        <br />
        <br />
        <img src="/me.png" alt="프로필 이미지" width={200} height={200} />
        <div className="scroll">
		<div className="scroll__circle"></div>
		<div className="scroll__circle"></div>
	    </div>
        <div className='scroll_text'>scroll !</div>
      </section>

      <section id="motto">
        <div className='motto'>
        <h2 data-animate={true}>Growth</h2> 
        <div> An enthusiastic and fast learner who enjoys exploring and diving into new knowledge, driven by curiosity</div>
        <br />
        <div>💡 새로운 기술과 도구에 대한 열정으로 끊임없이 성장하는 개발자가 되기 위해 노력합니다.</div>
        <div>🧑🏻‍💻 FE뿐만 아니라 BE에도 관심사를 넓혀가며 적극적으로 웹 개발의 흥미를 키워갑니다.</div>
        <div>🌱 언제나 배우고, 나누고, 성장하고 싶습니다.</div>
        </div>
        <div className='motto'>
        <h2 data-animate={true}>Persistence</h2>
        <div>I always think about meaningful values. It&#39;s a process that I have to go through to achieve better.</div>
        <br />
        <div>📈 AI, 데이터 분석, HCI 연구 등을 적용한 다양한 프로젝트 경험을 통해 사고를 확장하는 개발자입니다.</div>
        <div>🌈 사용성 / 사용자 경험(UX)을 중점으로 의미있는 가치를 만들어 나가는 개발자가 되고 싶습니다.</div>
        </div>
      </section>

      <section id="achieve">
        <h2 data-animate={true}>Achieve</h2>
      </section>

      <div id="cursor" className="cursor">
        <div className="ring" ref={ringRef}>
          <div>{/* Border */}</div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;