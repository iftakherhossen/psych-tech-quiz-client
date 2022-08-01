import { Controlled as ControlledEditor } from 'react-codemirror2';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css';
// import 'codemirror/mode/xml/xml';
// import 'codemirror/mode/javascript/javascript';
// import 'codemirror/mode/css/css';
import { useState } from 'react';
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from 'react-icons/ai';
import { FaCopy, FaSave } from "react-icons/fa";

const Editor = (props) => {
     const {
          language,
          displayName,
          value,
          onChange
     } = props;

     const [open, setOpen] = useState(true);

     function handleChange(editor, data, value) {
          onChange(value);
     }

     const handleCopyCode = (content) => {
          navigator.clipboard.writeText(content);
     }

     const handleSaveCode = (content) => {
          console.log(content)
     }

     return (
          <div className='grid grid-col-3 w-full'>
               <div className={`editor-container ${open ? '' : 'collapsed'} pt-2`}>
                    <div className="flex justify-between items-center border-b-2 border-stone-200 bg-[1f2023] py-2 editor-title pl-4">
                         <h1 className="text-xl font-medium text-white">{displayName}</h1>
                         <div className='flex px-2'>
                              <button className="p-2 rounded-full mx-1 text-white cursor-pointer" onClick={() => handleCopyCode(value)} disabled={!value}>
                                   <FaCopy className="text-lg" />
                              </button>
                              <button className="p-2 rounded-full text-white mx-1 cursor-pointer" onClick={() => handleSaveCode(value)} disabled={!value}>
                                   <FaSave className="text-lg" />
                              </button>
                              <button type="button" className="p-2 expand-collapse-btn text-white mx-1" onClick={() => setOpen(prevOpen => !prevOpen)}>
                                   {open ? <AiOutlineFullscreen className="text-lg" /> : <AiOutlineFullscreenExit className="text-lg" />}
                              </button>
                         </div>
                    </div>
                    {/* <CodeMirror
                         onBeforeChange={handleChange}
                         value={value}
                         className="code-mirror-wrapper"
                         options={{
                              lineWrapping: true,
                              lint: true,
                              mode: language,
                              lineNumbers: true
                         }}
                    /> */}
                    <ControlledEditor
                         onBeforeChange={handleChange}
                         value={value}
                         className="code-mirror-wrapper"
                         options={{
                              lineWrapping: true,
                              lint: true,
                              mode: language,
                              theme: 'material',
                              lineNumbers: true
                         }}
                    />
               </div>
          </div>
     )
};

export default Editor;