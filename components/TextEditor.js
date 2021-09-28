import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

export default function TextEditor() {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  return <Editor editorState={editorState} onChange={setEditorState} />;
}

ReactDOM.render(<TextEditor />, document.getElementById('container'));