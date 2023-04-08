import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class App extends Component {
    render() {
        return (
            <div className="App" style={{padding:'20px',minHeight:''}}>
                <h2>Using CKEditor 5 build in React</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>React Js ckeditor</p>"
                    onReady={ editor => {
                        console.log( 'Editor is ready to use!', editor );
                        editor.ui.view.editable.element.style.minHeight = "250px";
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>
        );
    }
}

export default App;
