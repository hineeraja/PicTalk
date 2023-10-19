import React from 'react'

export default function Footer(props) {
  
  return (
    <footer className="footer" style={{textAlign: "center",  display: "flex", justifyContent: "space-between" }} >
    <div>
        <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img style={{width: "50px", height: "50px"}}
                src="/img/facebook.png"
                alt="Facebook"
                className="logo"
            ></img>
        </a>
    </div>
    <div>
        <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img style={{width: "50px", height: "50px"}}
                src="/img/linkedinLogo.png"
                alt="LinkedIn"
                className="logo"
            ></img>
        </a>
    </div>
    <div>
        <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img style={{width: "50px", height: "50px"}}
                src="/img/twitterLogo.png"
                alt="Twitter"
                className="logo"
            ></img>
        </a>
    </div>
</footer>
);
}
