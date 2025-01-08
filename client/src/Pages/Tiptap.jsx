import { Fragment } from "react"
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit'
// import Highlight from '@tiptap/extension-highlight';
import '../index.css';
import TextStyle from '@tiptap/extension-text-style';
import TextAlign from '@tiptap/extension-text-align';
import Color from '@tiptap/extension-color';
import Underline from "@tiptap/extension-underline";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import HighlightExtension from "./CustomExtension/HighlightExtension";
import BoldExtension from "./CustomExtension/BoldExtension";
import ItalicExtension from "./CustomExtension/ItalicExtension";

const extensions = [
    StarterKit,
    TextStyle.configure({
        types: ['textStyle'],
    }),
    TextAlign.configure({
        types: ['paragraph', 'heading'],
    }),

    HighlightExtension,
    ItalicExtension,
    BoldExtension,
    Color,
    Underline,
    Subscript,
    Superscript
];



const content = "write something here...";

const Tiptap = () => {
    const editor = useEditor({
        extensions,
        content,
    })

    // console.log(editor.isEmpty)
    return (
        <Fragment>
            <div className="ribbon">
                <button
                    onClick={() => editor.chain().focus().toggleSuperscript().run()}
                    className={editor.isActive('subscript') ? 'is-active' : ''}
                >
                    subscript
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleSuperscript().run()}
                    className={editor.isActive('superscript') ? 'is-active' : ''}
                >
                    superscript
                </button>

                {/*Custom Extension*/}
                <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className="">
                Highlight
            </button>

              

                {/*Custom Extension Highlight Text Button */}
                <button
                    onClick={() => editor.chain().focus().toggleHighlight().run()}
                    className="">
                    Highlight
                </button>


                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className="">
                    Bold
                </button>


                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleItalic()
                            .run()
                    }
                    className={editor.isActive('italic') ? 'is-active' : ''}
                >
                    Italic
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleStrike()
                            .run()
                    }
                    className={editor.isActive('strike') ? 'is-active' : ''}
                >
                    Strike
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleCode()
                            .run()
                    }
                    className={editor.isActive('code') ? 'is-active' : ''}
                >
                    Code
                </button>
                <button
                    onClick={() => editor.chain().focus().unsetAllMarks().run()}>
                    Clear marks
                </button>
                <button onClick={() => editor.chain().focus().clearNodes().run()}>
                    Clear nodes
                </button>
                <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={editor.isActive('paragraph') ? 'is-active' : ''}
                >
                    Paragraph
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className=""
                >
                    H1
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
                >
                    H2
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
                >
                    H3
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                    className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
                >
                    H4
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                    className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
                >
                    H5
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                    className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
                >
                    H6
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'is-active' : ''}
                >
                    Bullet list
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive('orderedList') ? 'is-active' : ''}
                >
                    Ordered list
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={editor.isActive('codeBlock') ? 'is-active' : ''}
                >
                    Code block
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    disabled={!editor.can().chain().focus().toggleUnderline().run()}
                >
                    Underline
                </button>

                {/* Right Align Button */}
                <button

                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    className={`${editor.isActive({ textAlign: 'right' }) ? '' : ''
                        } p-2 rounded`}
                >
                    Right Align
                </button>

                {/* left Align Button */}
                <button

                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    className={`${editor.isActive({ textAlign: 'left' }) ? '' : ''} p-2 rounded`}>
                    left Align
                </button>

                {/* center Align Button */}
                <button
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    className={`${editor.isActive({ textAlign: 'center' }) ? '' : ''
                        } p-2 rounded`}>
                    center Align
                </button>




                <button
                    onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                    Horizontal rule
                </button>
                <button
                    onClick={() => editor.chain().focus().setHardBreak().run()}>
                    Hard break
                </button>
                <button
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .undo()
                            .run()
                    }
                >
                    Undo
                </button>
                <button
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .redo()
                            .run()
                    }
                >
                    Redo
                </button>
                <button

                    onClick={() => editor.chain().focus().Color('#958DF1').run()}
                    className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}>
                    Purple
                </button>

            </div>
            {/*-----------------create the editor------------------------------------ */}
            <div className="editor">


                <EditorContent editor={editor}
                    className="editorinside p-5" />


            </div>
        </Fragment>
    )
}

export default Tiptap;