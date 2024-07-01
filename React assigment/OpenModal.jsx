import React, { useState } from "react";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
} from "reactstrap";

export default function OpenModal(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="flex gap justify-center  items-center mt-80 ">
        <div className="">

        <h1 className=" text-2xl">Modal Login Form</h1>
      <Button  color="danger" onClick={toggle}>
        Login Form     </Button>
        <h1 className=" text-2xl">Modal Registration Form</h1>
      <Button  color="success" onClick={toggle}>
        Registration Form     </Button>
        </div>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader  toggle={toggle}>
            <p className=" text-center text-2xl">

          Login To My Account
            </p>
        </ModalHeader>
        <Form>
            <div className=" p-2">

          <div>
            <Input
              className=" mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Email Adrees"
              ></Input>
            <Input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="password"
              ></Input>
          </div>
          <div className="flex items-center mb-4">
            <Input
              type="checkbox"
              id="remember"
              className="h-4 w-4 mt-3 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
            <label
              htmlFor="remember"
              className="ml-2 block mt-3 text-sm text-gray-900"
              >
              Remember Me On This Computer
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
            LOGIN
          </button>
          <div className="mt-4 text-center">
            <a
              href="#"
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              Forgot Your Password?
            </a>
            <p className="text-sm mt-1">or</p>
            <a
              href="#"
              className="text-sm text-indigo-600 hover:text-indigo-500"
              >
              Create A New Account
            </a>
          </div>
                </div>
        </Form>
       
      </Modal>
    </div>
  );
}

