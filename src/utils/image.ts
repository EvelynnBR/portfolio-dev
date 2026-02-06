import profile from "../assets/image/profile.jpg"
import lpPatinsImage from "../assets/image/lp-patins.png"
import adivinheImage from "../assets/image/adivinhe-dev.png"
import velotaskImage from "../assets/image/velotask.png"
import reactImage from "../assets/image/certificado/certificado-react.png"
import gitEGitHubImage from "../assets/image/certificado/certificado-git-github.png"
import htmlECssImage from "../assets/image/certificado/certificado-html-css.png"
import javascriptImage from "../assets/image/certificado/certificado-javascript.png"
import nodeImage from "../assets/image/certificado/certificado-node.png"
import fullstackImage from "../assets/image/certificado/certificado-full-stack.png"

export const IMAGES = {
  profile: {
    profile: profile,
    alt: "Foto da Evelyn",
  },
  lpPatins: {
    laPatins: lpPatinsImage,
    alt: "Foto do projeto - Landing Page de patins",
  },
  adivinhe: {
    adivinhe: adivinheImage,
    alt: "Foto do jogo - Adivinhe",
  },
  velotask: {
    velotask: velotaskImage,
    alt: "Foto do projeto - Velotask",
  },

  certificado: {
    react: {
      image: reactImage,
      alt: "Certificado de react",
    },
    gitEGitHub: {
      image: gitEGitHubImage,
      alt: "Certificado de Git e GitHub",
    },
    htmlECss: {
      image: htmlECssImage,
      alt: "Certificado de Fundamentos de HTML e CSS",
    },
    javascript: {
      image: javascriptImage,
      alt: "Certificado do Javascript",
    },
    node: {
      image: nodeImage,
      alt: "Certificado de Introdução ao Node.js",
    },
    fullstack: {
      image: fullstackImage,
      alt: "Certificado de especialização/formação em Fullstack",
    },
  },
}
