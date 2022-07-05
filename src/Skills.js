export default function Skills() {
    return (
        <div className="container" id="skills">
            <div className="container-title-right">
                <h2 data-aos="fade-right">SKILLS</h2>
            </div>
            <div className="container-content">
                <div className="skill-card" data-aos="fade-left">
                    <h3>Solidity</h3>
                    <img src={require("./images/solidity-logo.png")} className="solidity-img"></img>
                    <button className="gradient-button">
                        <h4>Visit Website</h4>
                    </button>
                </div>
                <div className="skill-card" data-aos="fade-left">
                    <h3>React JS</h3>
                    <img src={require("./images/react-logo.png")} className="card-img"></img>
                    <button className="gradient-button">
                        <h4>Visit Website</h4>
                    </button>
                </div>
                <div className="skill-card" data-aos="fade-left">
                    <h3>Ethers.js</h3>
                    <img src={require("./images/ethers-js-logo.png")} className="ethers-js-img"></img>
                    <button className="gradient-button">
                        <h4>Visit Website</h4>
                    </button>
                </div>
                <div className="skill-card" data-aos="fade-left">
                    <h3>Hardhat</h3>
                    <img src={require("./images/hardhat-logo.png")} className="card-img"></img>
                    <button className="gradient-button">
                        <h4>Visit Website</h4>
                    </button>
                </div>
                <div className="skill-card" data-aos="fade-left">
                    <h3>Alchemy</h3>
                    <img src={require("./images/alchemy-logo.png")} className="card-img"></img>
                    <button className="gradient-button">
                        <h4>Visit Website</h4>
                    </button>
                </div>
                <div className="skill-card" data-aos="fade-left">
                    <h3>MetaMask</h3>
                    <img src={require("./images/metamask-logo.png")} className="card-img"></img>
                    <button className="gradient-button">
                        <h4>Visit Website</h4>
                    </button>
                </div>
            </div>
        </div>

    )
}