import React, { useState } from 'react';
import EditorBox from '../components/PlaygroundComponents/EditorBox';
import { BsArrowRight } from "react-icons/bs";

const Playground = () => {
     const [html, setHtml] = useState('');
     const [css, setCss] = useState('');
     const [js, setJs] = useState('');

     const srcDoc = `
          <html>
               <body>${html}</body>
               <style>${css}</style>
               <script>${js}</script>
          </html>
     `

     return (
          <div>
               {/* <div className="pane top=pane grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 px-8">
                    <EditorBox
                         language="xml"
                         displayName="HTML"
                         value={html}
                         onChange={setHtml}
                    />
                    <EditorBox
                         language="css"
                         displayName="CSS"
                         value={css}
                         onChange={setCss}
                    />
                    <EditorBox
                         language="javascript"
                         displayName="JavaScript"
                         value={js}
                         onChange={setJs}
                    />
               </div>
               <div className="pane py-5 px-10">
                    <h3 className="ml-1.5 text-xl font-semibold flex items-center mb-2">Output <BsArrowRight className='ml-1' /></h3>
                    <iframe
                         srcDoc={srcDoc}
                         title="output"
                         sandbox="allow-scripts"
                         frameBorder="0"
                         width="100%"
                         height="100%"
                         className="bg-slate-100 rounded-lg px-2"
                    ></iframe>
               </div> */}
          </div>
     )
};

export default Playground;