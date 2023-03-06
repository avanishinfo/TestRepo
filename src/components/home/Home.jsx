import React from 'react';
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import axios from 'axios';

// import { Application } from '@splinetool/runtime';
    
// const canvas = document.getElementById('canvas3d');
// const app = new Application(canvas);
// app.load('https://prod.spline.design/Md35uQyny7j-LEMl/scene.splinecode');
//https://translate.moxwave.com/p9/MOXAPI.ashx

const url = "/p9/MOXAPI.ashx"

const Home = () => {

    
  let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'https://translate.moxwave.com');
        headers.append('Access-Control-Allow-Credentials', 'true');


    const onType = async (e) => {
        const search = e.target.value 
url
        var e = document.getElementById("language");
        var text = e.options[e.selectedIndex].text;

        var da = {
            "categories": "Electronics, Mobile ",
            "data": [
                {
                    "field": "Description",
                    "inln": text,
                    "op": "0",
                    "qual": "4",
                    "text": document.getElementById("inputText").value
                }
            ],
            "key": "BFDB-A007-D6DF-44A1-BDE1-2D15-1310-45F3",
            "lang": [
                text
            ],
            "priority": "1",
            "recid": "176972"
        }

        axios(, {
            method: 'POST',
            mode: 'no-cors',
            headers: headers,
            data: da,
            withCredentials: true,
            credentials: 'same-origin',
          }).then(function (response) {
            const dataD = response.data.data[0];
            const resultText = dataD.text;
            document.getElementById("result").innerHTML = resultText;            
            
        })
        .catch(function (error) {
            console.log("url: " + url);
            console.log(error);
        });
        
    }

    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
            
                <div style={{marginTop: "4em", textAlign: "center"}}>

                        <label for="language">Select a Language: </label>
                        <select name="language" id="language">
                            <option value="Hindi">Hindi</option>
                            <option value="English">Engish</option>
                            <option value="Bengali">Bengali</option>
                            <option value="Arabic">Gujarati</option>
                            <option value="Arabic">Tamil</option>
                            <option value="Arabic">Punjabi</option>
                            <option value="Arabic">Telugu</option>
                            <option value="Arabic">Kannada</option>
                            <option value="Arabic">Malayalam</option>
                            <option value="Arabic">Bhojpuri</option>
                            <option value="Arabic">Arabic</option>
                        </select>
                        

                        <br/>
                        <br/>

                    <textarea id='inputText' type="text" placeholder='data for language conversion' cols="50" rows="5"/> 
                    <br/><br/>

                    <button className="button button--flex" name='onClick' onClick={onType}>
                        Convert Data
                        <svg
                            class="button__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            >
                            <path
                                d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                                fill="var(--container-color)"
                            ></path>
                            <path
                                d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                                fill="var(--container-color)"
                            ></path>
                        </svg>
                    </button>

                     <br/><br/>
                    
                    <div style={{textAlign: "center"}}>
                        <h3>Final Result: </h3>
                        <p id='result'></p>
                    </div>
                </div>

                <div >
                </div>
                <div >
                </div>
            </div>
        </section>
    )
}

export default Home