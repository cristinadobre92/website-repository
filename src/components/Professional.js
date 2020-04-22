import React, { Component } from "react";
import { Grid, Cell, Tab, Tabs } from "react-mdl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

class Professional extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleTabs() {
    if (this.state.activeTab === 0) {
      return (
        <div style={{ width: "80%", margin: "auto" }}>
          <Grid className="demo-grid-1">
            <Cell col={2}>PERIOD</Cell>
            <Cell col={4}>UNIVERSITY</Cell>
            <Cell col={1}>LINK</Cell>
            <Cell col={5}>FIELD</Cell>
          </Grid>
          <Grid className="demo-grid-1">
            <Cell col={2}>2011-2017</Cell>
            <Cell col={4}>
              Technical University of Civil Engineering in Bucharest
            </Cell>
            <Cell col={1}>
              <a
                className="uni-work"
                href="https://utcb.ro/"
                target="blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </Cell>
            <Cell col={5}>Civil Engineering/Structural Engineering</Cell>
          </Grid>
          <Grid className="demo-grid-1">
            <Cell col={2}>2015-2016</Cell>
            <Cell col={4}>Erasmus exchange: Czech Technical University</Cell>
            <Cell col={1}>
              <a
                className="uni-work"
                href="https://www.cvut.cz/en"
                target="blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </Cell>
            <Cell col={5}>Structural Engineering</Cell>
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div style={{ width: "80%", margin: "auto" }}>
          <Grid className="demo-grid-1">
            <Cell col={2}>PERIOD</Cell>
            <Cell col={4}>COMPANY</Cell>
            <Cell col={1}>LINK</Cell>
            <Cell col={5}>POSITION</Cell>
          </Grid>
          <Grid className="demo-grid-1">
            <Cell col={2}>Jan. 2017 - Jun. 2017</Cell>
            <Cell col={4}>Terratest Geotehnic</Cell>
            <Cell col={1}>
              <a
                className="uni-work"
                href="https://terratestromania.ro/en/"
                target="blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </Cell>
            <Cell col={5}>Quotation Engineer</Cell>
          </Grid>
          <Grid className="demo-grid-1">
            <Cell col={2}>Aug. 2017 - Mar. 2020</Cell>
            <Cell col={4}>Buhler Group</Cell>
            <Cell col={1}>
              <a
                className="uni-work"
                href="https://www.buhlergroup.com/content/buhlergroup/global/en/homepage.html"
                target="blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </Cell>
            <Cell col={5}>Design Engineer</Cell>
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <br />
          MAD
          <br />
          CODING
          <br />
          SKILLS
          <br />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="tab-header">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={(tabId) => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>Study</Tab>
            <Tab>Work</Tab>
            <Tab>Skills</Tab>
          </Tabs>
          <section>
            <div className="content">{this.toggleTabs()}</div>
          </section>
        </div>
        <div>
          <form>
            <label>Send a message to Cristina:</label>
            <br />
            <textarea
              type="text"
              name="message"
              placeholder="This and that..."
            />
            <br />
            <input type="submit" value="Send message" />
          </form>
        </div>
      </div>
    );
  }
}

export default Professional;
