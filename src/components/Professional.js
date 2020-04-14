import React, { Component } from "react";
import { Grid, Cell, Tab, Tabs } from "react-mdl";

class Professional extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleTabs() {
      if(this.state.activeTab === 0){
          return (
          <div>first</div>
          )
      } else if(this.state.activeTab === 1){
          return (
            <div>second</div>
            )
        } else if(this.state.activeTab === 2){
            return (
                <div>third</div>
                )
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
          <div className="content">
            {this.toggleTabs()}
          </div>
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
