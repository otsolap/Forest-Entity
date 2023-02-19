import React from 'react'
import Markdown from 'markdown-to-jsx'

const MarkdownBlock = ({ markdown, className }) => {
    return (
        <div className={`markdown ${className ? className : ''}`}>
            <Markdown options={{ forceBlock: true, wrapper: 'article' }}>
                {markdown}
            </Markdown>
        </div>
    )
}

export default MarkdownBlock;