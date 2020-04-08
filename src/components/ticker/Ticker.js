import React, { Component } from 'react'
import Answer from './Answer'
import Question from './Question'
import NextAnswerBtn from './NextAnswerBtn'
import NextQuestionBtn from './NextQuestionBtn'

let i = 0;
class Ticker extends Component {


    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            question: "",
            responses: [],
            answer: "",
            data: null,
            id: "",
        };
      }
      
      //When Page Starts
      componentDidMount(){
          this.getData();
      }

      // Fetch API
      getData = () => {

        //INSERT JSON API
        fetch("https://hello-lamp-post-api.herokuapp.com/questions/random?location_id=10&locale=en")
        .then(res => res.json())
        .then(
            (result)=>{
                this.setState({
                    isLoaded: true,
                    data: result,
                    question: result.question.text.en,
                    responses: result.responses,
                    id: result.question.id,
                });
                //Sets Default Answer
                i = 0;
                this.setState({
                    answer: this.state.responses[i].text
                });
            },
            //Error Handle
            (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
            }
        )
      }


      // Show Next Answer.
      nextAnswer = () => {
          if(i < this.state.responses.length - 1){
            i++;
            this.setState({
                answer: this.state.responses[i].text
            });
          } else{
            i = 0;
            this.setState({
                answer: this.state.responses[i].text
            });
          }
          console.log(i);
        }

    render() {
        const {
            error,
            isLoaded,
            question,
            answer
        } = this.state;

        if (error){
            return <div>Error: {error.message}</div>;
        }
        else if(!isLoaded){
            return <div>Loading...</div>;
        }else{
            return (
                <div className=" row ticker">
                    <div className="ticker-holder">
                        <Question question={question}/>
                        <Answer answer={answer}/>
                    </div>
                    <div className="ticker-controller">
                        <NextQuestionBtn question={this.getData}/>
                        <NextAnswerBtn nextAnswer={this.nextAnswer}/>
                    </div>
                </div>
            )
        }
    }
}

export default Ticker