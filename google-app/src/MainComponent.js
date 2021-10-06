import React from "react";
import firebase, { db } from "./Backend/fire"
import "./App.css"
import { DescriptionDiv } from "./styles";
class MainComponent extends React.Component {

    content() {
        const text = `
        ברוכים הבאים!
        
        נכנסתם עכשיו? פנו לנציגי הקבלה וקבלו מספר אישי.
        
        המיונים מחולקים לשני שלבים: קודם כל ראיון אישי ואחר כך נאום.
        ברגע שתורכם יגיע יפנו אתכם לעמדת הראיונות - בבקשה לציין בפני המראיין את המספר שקיבלתם.
        
        כשתסיימו את הראיון, המראיין ינחה אתכם לחדר הנאומים הרלוונטי.
        נא להיכנס לחדר בשקט ולהמתין לתורכם.
        
        בהצלחה!`;

        return { __html: text };
    }

    constructor(props) {
        super(props);
        console.log(this.props.match.params);
        this.state = {
            counter: "",
            letter: "",
            lastLetter: "",
            password: ""
        }
    }

    componentDidMount() {
        var letter = this.props.match.params.line;
        var lastLetter = "last" + letter;
        const eventDataRef = db
            .collection("Counters")
            .doc("CountersDoc");
        eventDataRef.onSnapshot(snapshot => {
            let liveCounters = snapshot.data();
            this.setState({
                letter: letter,
                lastLetter: lastLetter,
                counter: letter + liveCounters[letter],
                lastCounter: letter + liveCounters[lastLetter]
            });
        });
    };

    incrementCounter(counter) {
        let password = this.state.password
        if (this.state.password != "rebuttal") {
            password = prompt('Enter password')
        }
        this.setState({ password })
        if (password != "rebuttal") {
            return
        }
        const data = {};
        data[counter] = firebase.firestore.FieldValue.increment(1);
        db.collection("Counters").doc("CountersDoc").update(data);
    }

    decrementCounter(counter) {
        let password = this.state.password
        if (this.state.password != "rebuttal") {
            password = prompt('Enter password')
        }
        this.setState({ password })
        if (password != "rebuttal") {
            return
        }
        const data = {};
        data[counter] = firebase.firestore.FieldValue.increment(-1);
        db.collection("Counters").doc("CountersDoc").update(data);
    }

    render() {
        return (
            <div className="app-content-2" style={{width: '50%', margin: '0 auto'}}>
                <img src="/clubfavicon.png" width="150px" />
                <br />
                המספר האחרון שנכנס<br />
                {this.state.counter}
                <div className="myblock">
                    <button onClick={() => this.incrementCounter(this.state.letter)}>+</button>
                    <button onClick={() => this.decrementCounter(this.state.letter)}>-</button>
                </div>
                <br />
                <br />
                המספר האחרון שממתין בתור
                <br />
                {this.state.lastCounter}
                <div className="myblock">
                    <button onClick={() => this.incrementCounter(this.state.lastLetter)}>+</button>
                    <button onClick={() => this.decrementCounter(this.state.lastLetter)}>-</button>
                </div>
                <DescriptionDiv dangerouslySetInnerHTML={this.content()} />
            </div>
        )
    }
}

export default MainComponent;