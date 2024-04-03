import './App.css';



function App() {
  
  return (
    <div className="App">
      <Navcontainer/>
      <Sidebarcontainer/>
      
    </div>
  );
}

function Navcontainer() {
  return(
    <div className="navbar">
      <div className="logo">
        <img id='logo' src="logo 1.png" alt="LOGO" />

      </div>
      <div className='profile'>
        <img id='profilepic' src="profile.png" alt="" />
        <button id='addlinkbtn'>+    Add Link</button>

      </div>

    </div>


  )


}

function Sidebarcontainer(){
  return(

    <div className="content">
      <div className="sidemenu">
        <div className="home">
          <img id='homepic' src="bx-home-alt-2.svg" alt="" />
          <a id='homeheading' href="">Home</a>

        </div>
        <div className="onboarding">
          <img id='onboardingicon' src="bx-list-plus.svg" alt="" />
          <a href="">Onboarding</a>

        </div>
        <div className="dashboard">

          
          <img id='dashboardicon' src="bxs-dashboard.svg" alt="" /> 
          <a id='dashboardtitle' href="">Dashboard</a>
        </div>
        <div className="mode">
          <img id='modetoggle' src="bx-toggle-left.svg" alt="" />
          <h6 className="modeh6">Mode</h6>

        </div>

        <div className="content">

        </div>

      </div>
      <section>
          <div className="firstrow">
            <p className="greetings">Good afternoon Rose</p>
            <div className="performance-location">
              <div className="performance">
                  <p className="linkperformance" >Link performance</p>
                  <div className="chart" >
                      <img id='piechart' src="pie.png" alt="" />
                      <div className="chart-links">


                      </div>

                  </div>

              </div>

              <div className="locations">
                <p className="locationscovered" >Locations Covered</p>
                <img id='Map' src="Map.png" alt="Map" />
                
              </div>
              


            </div>

            <div className="links-recent">
              <div className="links">
                <p className="subs">Links</p>
                <div className="crypto">
                  <img id='cryptoicon' src="Group 1.png" alt="" />
                  <a href="https://accounts.binance.com/en/register?ref=836546556&gad_source=1&gclid=CjwKCAjw_LOwBhBFEiwAmSEQAa5dqZ9_XZ47GUvCh4FqgqwGt95Mg0L6tuseT4GRUoUrLC2uUAc5DBoC9ZoQAvD_BwE">Crypto</a>
                  <img id='angleright' src="Angle right.png" alt="" />
                </div
                >
                <div className="mpesa">
                  <img id='mpesaicon' src="mpesa.png" alt="" />
                  <a id='mpesatitle' href="https://www.safaricom.co.ke/">M-pesa</a>
                  <img id='angleright' src="Angle right.png" alt="" />
                
                </div>

                <div className="edge-cards">
                  <img id='edgecardsicon' src="edgeCards LOGO.png" alt="" />
                  <a href="https://edge.cards/home/edgecards/">Edge Cards</a>
                  <img id='angleright' src="Angle right.png" alt="" />
                  
                </div>
                <div className="paypal">
                  <img id='paypalicon' src="paypal.png" alt="" />
                  <a href="https://www.paypal.com/signin">Paypal</a>
                  <img id='angleright' src="Angle right.png" alt="" />
                  
                </div>

                <div className="credit-cards">
                  <img id='crediticon' src="credit.png" alt="" />
                  <a href="https://bd.visa.com/">Credit cards</a>
                  <img id='angleright' src="Angle right.png" alt="" />
                  
                </div> 
                
              </div>
              <div className="recents">
                <div className="recent-header">
                  <p className="intro">Recent</p>
                  <p className="viewall">View All</p>
                </div>

              </div>
            
            </div>


          </div>
          

      </section>
    </div>
  )
}
export default App;
