import React from 'react';
import {Accordion} from 'react-bootstrap';
import {Panel} from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';
require("bootstrap/dist/css/bootstrap.css");
require("../css/css.css");
<script type="text/javascript" src="CoolPlugin.js"></script>
 
export default class Form extends React.Component{
	constructor(){
        super();
        this.state={
          show:false,
          text:"",
          searchString:""
        };
    }
    render() {
		function showToast(){
			alert("Android");
		//CoolPlugin.showToast();
		CoolPlugin.showToast('', function(result){
				var x= document.getElementById("input");
				x.setAttribute("value", result);
				
			},function(e){
			
			});
		};



    	 //Check Modal Function
        var checkModal=()=> {
			if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
				showToast();
			}else{
				if(this.state.show){
					this.setState({show: false});
				} else {
					this.setState({show: true});
				}
			}
		};

        //Set Value to Textbox Functionvar
        var setText=(event)=>{
				  this.setState({text: event.target.value});
                  this.setState({show: false});
        };
        //Use Array to Collect All Value on Input Button
        var Array1= ["Hello1","Hello2","Hello3"];
        var Array2= ["Hello3","Hello4","Hello5","Hello6","Hello7",];
        var Array3= ["Hello8","Hello9","Hello10"];
        var Array4= ["Hello11","Hello12","Hello13"];
        var Array5= ["Hello14","Hello15","Hello16"];
        var Array6= ["Hello17","Hello18","Hello19"];

        //Return Textbox
        var getValue=(value)=>{
        		return(
        			<input type="button" onClick={setText} value={value.name}/>

       			);
        };

var SearchExample = React.createClass({
    getInitialState: function(){
        return { searchString: '' };
    },
    handleChange: function(e){
        // If you comment out this line, the text box will not change its value.
        // This is because in React, an input cannot change independently of the value
        // that was assigned to it. In our case this is this.state.searchString.

        this.setState({searchString:e.target.value});
    },
    checkAc: function(){
        
        return accordionList;
    },
    render: function() {
        var libraries = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase();

        var accordionList;
        if(searchString.length > 0){
            // We are searching. Filter the results.
            accordionList=
            <Accordion> 
                {libraries.map(function(l){
                  return <input type="button" onClick={setText} value={l.name}/>
                })}
            </Accordion>;
            libraries = libraries.filter(function(l){
                return l.name.toLowerCase().match( searchString );
            });
        }else{
            accordionList = <Accordion> 
                <Panel header="แอนนิวตี้" eventKey="1">          {libraries.map(getValue)}</Panel>
                <Panel header="ตลอดชีพ" eventKey="2">           {libraries.map(getValue)}</Panel>
                <Panel header="ชั่วระยะเวลา" eventKey="3">         {libraries.map(getValue)}</Panel>
                <Panel header="บำนาญ" eventKey="4">            {libraries.map(getValue)}</Panel>
                <Panel header="สะสมทรัพย์" eventKey="5">         {libraries.map(getValue)}</Panel>
                <Panel header="โตเกียว เฮลธ์ แพ็คเกจ" eventKey="6">  {libraries.map(getValue)}</Panel>
            </Accordion> ;
        }

        
        return  <div>
                    <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />
                    {accordionList}
                </div>;
        }
    }
    );











      var libraries = [
    { name: 'Backbone.js'},
    { name: 'AngularJS'},
    { name: 'jQuery'},
    { name: 'Prototype'},
    { name: 'React'},
    { name: 'Ember'},
    { name: 'Knockout.js'},
    { name: 'Dojo'},
    { name: 'Mootools'},
    { name: 'Underscore'},
    { name: 'Lodash'},
    { name: 'Moment'},
    { name: 'Express'},
    { name: 'Koa'},
    ];

		return(
			<ButtonToolbar>
                    <input id="input" onClick={checkModal} type="text" value={this.state.text}></input>
                    <Modal
                      {...this.props}
                      show={this.state.show}
                      onHide={checkModal}
                      dialogClassName="custom-modal"
                    >
                      	<Modal.Header>
                          
                          <SearchExample items={ libraries } />
                          
                          
                        </Modal.Header>
                    </Modal>
                </ButtonToolbar>
		);


	}


}