export default function Projects() {
    return (
        <div className="container" id="projects">
            <div className="container-title-left">
                <h2 data-aos="fade-left">PROJECTS</h2>
            </div>
            <div className="container-content">
                <div className="project-card" data-aos="fade-right">
                    <h3>ERC721 Minting Bot</h3>
                    <img src={require("./images/project0.PNG")} className="card-img"></img>
                    
                    <div className="project-skills-container">
                        <h5>Skills Required:</h5>
                        <ul>
                            <li>Solidity for ERC721 NFT deployment</li>
                            <li>Hardhat for contract testing</li>
                            <li>Alchemy for API connection</li>
                            <li>Ethers.js for MetaMask integration</li>
                            <li>React JS for front end development</li>
                        </ul>
                    </div>
                    <button className="gradient-button">
                        <h4>Site</h4>
                    </button>
                    <button className="gradient-button">
                        <h4>Code</h4>
                    </button>
                </div>
                <div className="project-card" data-aos="fade-right">
                    <h3>Web3 Dashboard</h3>
                    <img src={require("./images/project0.PNG")} className="card-img"></img>
                    
                    <div className="project-skills-container">
                        <h5>Skills Required:</h5>
                        <ul>
                            <li>React JS for front end development</li>
                            <li>Ethers.js for MetaMask integration</li>
                            <li>Alchemy for API connection</li>
                            <li style={ {color: "transparent"}}></li>
                            <li style={ {color: "transparent"}}></li>
                        </ul>
                    </div>
                    <button className="gradient-button">
                        <h4>Site</h4>
                    </button>
                    <button className="gradient-button">
                        <h4>Code</h4>
                    </button>
                </div>
                <div className="project-card" data-aos="fade-right">
                    <h3>Buy Me a Donut</h3>
                    <img src={require("./images/project0.PNG")} className="card-img"></img>
                    
                    <div className="project-skills-container">
                        <h5>Skills Required:</h5>
                        <ul>
                            <li>Solidity for smart contract development</li>
                            <li>Hardhat for testing</li>
                            <li>Alchemy for API connection</li>
                            <li>Ethers.js for MetaMask integration</li>
                            <li>Next.js for front end development</li>
                        </ul>
                    </div>
                    <button className="gradient-button">
                        <h4>Site</h4>
                    </button>
                    <button className="gradient-button">
                        <h4>Code</h4>
                    </button>
                </div>
            </div>
        </div>

    )
}