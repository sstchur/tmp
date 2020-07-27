import React from 'react';
import SplitPane from 'react-split-pane';
import * as monaco from 'monaco-editor';

export class Thing extends React.Component
{
    constructor(props)
    {
        super(props)

        this.container = React.createRef();
    }

    componentDidMount()
    {
        const defaultOptions =
		{
			minimap: { enabled: false },
			scrollBeyondLastLine: false,
			lineNumbers: 'off',
			renderLineHighlight: 'none',
			selectOnLineNumbers: true,
			automaticLayout: true,
			theme: 'defaultTheme',
			scrollbar: { alwaysConsumeMouseWheel: false }
		};

		const { id, options, value, autoFocus, onEmphasizeVariable, onHighlightVariables } = this.props;
		this.editor = monaco.editor.create(
			this.container.current,
			{
				value: 'alert("I love the Avett Brothers!")',
				...defaultOptions
			}
        );
        
        console.log(this.container);

    }
    render()
    {
        return (
            <SplitPane split="vertical" defaultSize={500} minSize={150}>
                <div>Left</div>
                <div style={{height:'800px', position:'relative', width: '100%'}}>
                    <div style={{position:'absolute', width:'100%', height:'500px', border:'2px solid grey'}} ref={ this.container } />
                </div>
            </SplitPane>
      );
      
      
    }
}