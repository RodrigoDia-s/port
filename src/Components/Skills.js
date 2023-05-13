
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Veja algumas tecnologias, linguagens e softwares com as quais já trabalhei.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" />
                  <h5>React</h5>
                </div>
                <div className="item">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python"  />
                  <h5>Python</h5>
                </div>
                <div className="item">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" />
                  <h5>C#</h5>
                </div>
                <div className="item">
                <img src="https://camo.githubusercontent.com/4545b55c7771bbd175235c80b518dcbbf2f6ee0b984a51ad9363cba8cb70e67c/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f737072696e67696f2f737072696e67696f2d69636f6e2e737667" alt="spring" data-canonical-src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"  width="40" height="40" />
                  <h5>Spring</h5>
                </div>
                <div className="item">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" alt="dotnet" />
                  <h5>ASP .NET</h5>
                </div>
                <div className="item">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap"  />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                <img src="https://camo.githubusercontent.com/537f66454b766b0d56da91225206ebf6d28ecff24d84668d52cf9430e02460fd/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f646a616e676f2e737667" alt="django" data-canonical-src="https://cdn.worldvectorlogo.com/logos/django.svg" />
                  <h5>Django</h5>
                </div>
                <div className="item">
                <img src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" alt="git" data-canonical-src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" />
                  <h5>PostgreSQL</h5>
                </div>

              </Carousel>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}


export default Skills;