import React, {useState, useEffect} from "react";
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import Dropdown from 'react-bootstrap/Dropdown';




const List = () => {
    const [list, setList] = useState([]);
    const [page,setPage] = useState(1);
    const [lastPage, setlastPage]= useState(1);

    useEffect(() => {

        async function fetchData() {
            fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
                .then((response) => response.json())
                .then((json) => {setList(json.results); setlastPage(json.info.pages)});

        }
        fetchData()
    }, [page])

    return (
        <div>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onClick={() => "unchecked"}>
                    <input type="checkbox" class="custom-control-input" id="checkbox1" checked onClick={() => "unchecked"}/>
                    <label class="custom-control-label" for="checkbox1" >Check me</label>                    
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Species</th>
                    <th>Type</th>
                    <th>Gender</th>
                    <th>Origin</th>
                    <th>Location</th>
                    

                </tr>
            </thead>
            <tbody>
                
                    {list.map((person,index) => {

                            return(<tr><td>{person.id}</td>
                                        <td><img src={person.image} alt="" style={{width: "100px", height: "100px"}}/></td>
                                        <td>{person.name}</td>
                                        <td>{person.status}</td>
                                        <td>{person.species}</td>
                                        <td>{person.type}</td>
                                        <td>{person.gender}</td>
                                        <td>{list[index].origin["name"]}</td>
                                        <td>{list[index].location["name"]}</td>
                                       
                                     </tr>)
                        
                    })}
            {console.log(page)}
            </tbody>
        </Table>
        <Pagination>
            <Pagination.First onClick={()=>setPage(1)}/>
            <Pagination.Prev onClick={()=>{if(page!==1){setPage(page-1)} else {setPage(1)} }}/>
            <Pagination.Item active>{page}</Pagination.Item>
            <Pagination.Next onClick={()=>{if(page!==lastPage){setPage(page+1)} else {setPage(lastPage)} }}/>
            <Pagination.Last onClick={()=>setPage(lastPage)}/>
        </Pagination>
        </div>
    )


}

export default List;