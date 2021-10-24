import React from 'react'
import './MessageForm.css'

function MessageForm() {
    return (
        <div>
            <p className='f3'>
                {'This Mooody Cow will spam messages to your prey . Give it a try'}
            </p>
            <div className='center'>
                <div className='form pa4 br3 shadow-5'>
                    <div className='center'>
                        <label className="f4 pa2 w-10" style={{color:'white'}} for="name">From</label>
                        <input className='f4 pa2 w-70' name="name" type="text" placeholder="xyz"/>
                    </div>
                    
                    <div className='center'>
                        <label className="f4 pa2 w-10" style={{color:'white'}} for="recipient">To</label>
                        <input className='f4 pa2 w-70' name="recipient" type="number" placeholder="+919876543210"/>
                    </div>

                    <label className='f4 pa2 w-70 center' style={{color:'white'}} for="moods">Choose a Mood:</label>

                        <select className='f4 pa2 w-70 center' name="moods" id="moods">
                            <option value="angry">Angry</option>
                            <option value="sad">Sad</option>
                            <option value="happy">Happy</option>
                            <option value="love">Love</option>
                        </select>
                    <input className='f6 pa2 w-70 center' type="number" placeholder="Number of msgs you want to send(Between 1 - 20)"/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Send</button>
                </div>           
            </div>
        </div>
    )
}

export default MessageForm
