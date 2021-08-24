import Particles from "react-tsparticles";
import { Component } from "react";
class Partical extends Component {
  constructor(props) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  particlesLoaded(container) {
    console.log(container);
  }

  render() {
    return (
      <Particles
        id="tsparticles"
        init={this.particlesInit}
        loaded={this.particlesLoaded}
        options={{
          fullScreen: {
            enable: true,
          },
          detectRetina: true,
          background: {
            color: "#000",
          },
          fpsLimit: 60,
          emitters: {
            direction: "top",
            life: {
              count: 0,
              duration: 0.1,
              delay: 0.1,
            },
            rate: {
              delay: 0.5,
              quantity: 1,
            },
            size: {
              width: 100,
              height: 0,
            },
            position: {
              y: 100,
              x: 50,
            },
          },
          particles: {
            number: {
              value: 0,
            },
            destroy: {
              mode: "split",
              split: {
                count: 1,
                factor: { value: 1 / 3 },
                rate: {
                  value: 100,
                },
                particles: {
                  stroke: {
                    color: {
                      value: [
                        "#5bc0eb",
                        "#fde74c",
                        "#9bc53d",
                        "#e55934",
                        "#fa7921",
                      ],
                    },
                    width: 1,
                  },
                  number: {
                    value: 0,
                  },
                  collisions: {
                    enable: false,
                  },
                  opacity: {
                    value: 1,
                    animation: {
                      enable: true,
                      speed: 0.6,
                      minimumValue: 0.1,
                      sync: false,
                      startValue: "max",
                      destroy: "min",
                    },
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    value: 1,
                    animation: {
                      enable: false,
                    },
                  },
                  life: {
                    count: 1,
                    duration: {
                      value: {
                        min: 1,
                        max: 2,
                      },
                    },
                  },
                  move: {
                    enable: true,
                    gravity: {
                      enable: false,
                    },
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    outMode: "destroy",
                  },
                },
              },
            },
            life: {
              count: 1,
            },
            shape: {
              type: "line",
            },
            size: {
              value: 50,
              animation: {
                enable: true,
                sync: true,
                speed: 150,
                startValue: "max",
                destroy: "min",
              },
            },
            stroke: {
              color: {
                value: "#ffffff",
              },
              width: 1,
            },
            rotate: {
              path: true,
            },
            move: {
              enable: true,
              gravity: {
                acceleration: 15,
                enable: true,
                inverse: true,
                maxSpeed: 100,
              },
              speed: { min: 10, max: 20 },
              outModes: {
                default: "destroy",
                top: "none",
              },
              trail: {
                fillColor: "#000",
                enable: true,
                length: 10,
              },
            },
          },
        }}
      />
    );
  }
}

export default Partical;
