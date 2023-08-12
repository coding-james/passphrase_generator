import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import GeneratePass from './generator-code';

const Generator = () => {

    const [list1, setList1] = useState("actors");
    const [list2, setList2] = useState("movies");
    const [includeNum, setIncludeNum] = useState("Y");
    const [includeSym, setIncludeSym] = useState("Y");
    const [passphrase, setPassphrase] = useState("This will be replaced once you submit");


    const Generate = (e) => {
        e.preventDefault();
        setPassphrase(GeneratePass(list1, list2, includeNum, includeSym));
    };

    return (
        <>
            <br />
            <h2>Create a Passphrase</h2>
            <hr class="border border-success border-2 opacity-75"></hr>

            <Form>
                <Form.Group className="mb-3">
                    <small class="form-text text-muted">Your Passphrase: </small>
                    <input readonly type="text" value={passphrase} class="form-control alert alert-dark" id="displayPhrase"></input>
                    <small class="form-text text-muted">Length: {passphrase.length} </small>
                    {/* TODO: Add colour coding to password length - Red <= 7, Amber <=10, Yellow <=13, Green >=14 */}
                </Form.Group>
            </Form>
            <br />
            {/* <hr class="border border-dark border opacity-25"></hr> */}

            <Form onSubmit={Generate}>
                <Form.Group className="mb-3">
                    <Form.Label> Select first list to use: </Form.Label>
                    <Form.Select value={list1} onChange={(e) => setList1(e.target.value)}>
                        <option value="actors">Actors</option>
                        <option value="movies">Movies</option>
                        {/* <option value="custom">Custom</option> */}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label> Select second list to use: </Form.Label>
                    <Form.Select value={list2} onChange={(e) => setList2(e.target.value)}>
                        <option value="actors">Actors</option>
                        <option value="movies">Movies</option>
                        {/* <option value="custom">Custom</option> */}
                        <option value="noSecondList">No Second List</option>
                    </Form.Select>
                </Form.Group>

                {/* Future Custom Lists - https://getbootstrap.com/docs/4.0/components/forms/#disabled  */}

                <Form.Group className="mb-3">
                    <Form.Label> Include Numbers: </Form.Label>
                    <Form.Select value={includeNum} onChange={(e) => setIncludeNum(e.target.value)}>
                        <option value="Y">Yes</option>
                        <option value="N">No</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label> Include Symbols: </Form.Label>
                    <Form.Select value={includeSym} onChange={(e) => setIncludeSym(e.target.value)}>
                        <option value="Y">Yes</option>
                        <option value="N">No</option>
                    </Form.Select>
                </Form.Group>
                <Button type="submit" className="btn btn-success btn-lg shadow">Generate</Button>
            </Form>
        </>
    )
}

export default Generator;