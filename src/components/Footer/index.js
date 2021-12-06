import React from 'react';

const footer = () => {
    const icons = [
        {
          name: "fab fa-github",
          link: "https://github.com/megwatson88"
        },
        {
          name: "fab fa-linkedin",
          link: "https://www.linkedin.com/in/megan-watson-751533127/"
        },
        {
          name: "fab fa-stack-overflow",
          link: "https://stackoverflow.com/"
        }
      ]
    
    return (
        <footer>
            <div className="footer bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
                            <p className="text-muted small mb-4 mb-lg-0"> Megan Watson 2021 All Rights Reserved</p>
                            {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )

}
export default footer;