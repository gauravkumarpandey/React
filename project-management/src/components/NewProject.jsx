import React, { useRef } from "react"
import {} from "react"
import Input from "./Input"
import Modal from "./Modal"

function NewProject({ onAddProject, handleCancel }) {
  const title = useRef()
  const description = useRef()
  const dueDate = useRef()
  const modal = useRef()

  const handleSave = () => {
    const enteredTitle = title.current.value
    const enteredDescription = description.current.value
    const enteredDueDate = dueDate.current.value

    if (enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDueDate.trim() === "") {
      modal.current.open()
      return
    }

    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    })
  }

  return (
    <>
      <Modal
        ref={modal}
        buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-700 mb-4">Oops ... looks like you forgot to enter a value. </p>
        <p className="text-stone-700 mb-4">Please provide valid value for all input fields. </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={handleCancel}
              className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="bg-slate-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md">
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input
            label="Title"
            ref={title}
          />
          <Input
            ref={description}
            label="Description"
            isTextArea
          />
          <Input
            label="Due Date"
            ref={dueDate}
            type="date"
          />
        </div>
      </div>
    </>
  )
}

export default NewProject
