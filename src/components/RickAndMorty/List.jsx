import React, {useState, useEffect} from "react";
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';






const List = () => {
    const [list, setList] = useState([]);
    const [page,setPage] = useState(1);
    const [lastPage, setlastPage]= useState(1);
    const [visible, setVisible]=useState(false);
    const [check, setChecked]=useState({'id': true, 'name': true, "image": true, "status": true, "species": true, "type": true, "gender": true, "origin": true, "location": true})


    useEffect(() => {

        async function fetchData() {
            fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
                .then((response) => response.json())
                .then((json) => {setList(json.results); setlastPage(json.info.pages)});

        }
        fetchData()
    }, [page])

    const clickHandler = () => {
        if(visible){
            setVisible(false)
        } else if (!visible){
            setVisible(true)
        }
    }
    
    const checkHandler = (name) => {
        if(check[name]) {
            let arr = {...check};
            arr[name] = false;
            setChecked({...arr})
        } else if (!check[name]){
            let arr = {...check};
            arr[name] = true;
            setChecked({...arr})
        }
        
    }

    return (
        <div>
            <div style={{textAlign: "right"}}>
                <button onClick={()=> clickHandler()}>Filter </button>
                <ul style={{display: visible ? "block" : "none", listStyleType: "none"}}>
                    <li><input type="checkbox" defaultChecked={check["id"] }  onClick={() => {checkHandler("id")}}/>ID</li>
                    <li><input type="checkbox" defaultChecked={check["image"] }  onClick={() => {checkHandler("image")}}/>Image</li>
                    <li><input type="checkbox" defaultChecked={check["name"] }  onClick={() => {checkHandler("name")}}/>Name</li>
                    <li><input type="checkbox" defaultChecked={check["status"] }  onClick={() => {checkHandler("status")}}/>Status</li>
                    <li><input type="checkbox" defaultChecked={check["species"] }  onClick={() => {checkHandler("species")}}/>Species</li>
                    <li><input type="checkbox" defaultChecked={check["type"] }  onClick={() => {checkHandler("type")}}/>Type</li>
                    <li><input type="checkbox" defaultChecked={check["gender"] }  onClick={() => {checkHandler("gender")}}/>Gender</li>
                    <li><input type="checkbox" defaultChecked={check["origin"] }  onClick={() => {checkHandler("origin")}}/>Origin</li>
                    <li><input type="checkbox" defaultChecked={check["location"] }  onClick={() => {checkHandler("location")}}/>Location</li>
                    {console.log(check)}

                </ul>
            </div>
            

        <Table striped bordered hover >
            
            <thead style={{position: "sticky", top: "0", background:"white"}}>
                <tr >
                    <th style={{display: check["id"] ? "table-cell" : "none"}}>ID</th>
                    <th style={{display: check["image"] ? "table-cell" : "none"}}>Image</th>
                    <th style={{display: check["name"] ? "table-cell" : "none"}}>Name</th>
                    <th style={{display: check["status"] ? "table-cell" : "none"}}>Status</th>
                    <th style={{display: check["species"] ? "table-cell" : "none"}}>Species</th>
                    <th style={{display: check["type"] ? "table-cell" : "none"}}>Type</th>
                    <th style={{display: check["gender"] ? "table-cell" : "none"}}>Gender</th>
                    <th style={{display: check["origin"] ? "table-cell" : "none"}}>Origin</th>
                    <th style={{display: check["location"] ? "table-cell" : "none"}}>Location</th>
                    

                </tr>
            </thead>
            <tbody>
                
                    {list.map((person,index) => {

                            return(<tr><td style={{display: check["id"] ? "table-cell" : "none"}}>{person.id}</td>
                                        <td style={{display: check["image"] ? "table-cell" : "none"}}><img src={person.image} alt="" style={{width: "100px", height: "100px"}}/></td>
                                        <td style={{display: check["name"] ? "table-cell" : "none"}}>{person.name}</td>
                                        <td style={{display: check["status"] ? "table-cell" : "none"}}>{person.status}</td>
                                        <td style={{display: check["species"] ? "table-cell" : "none"}}>{person.species}</td>
                                        <td style={{display: check["type"] ? "table-cell" : "none"}}>{person.type}</td>
                                        <td style={{display: check["gender"] ? "table-cell" : "none"}}>{person.gender}</td>
                                        <td style={{display: check["origin"] ? "table-cell" : "none"}}>{list[index].origin["name"]}</td>
                                        <td style={{display: check["location"] ? "table-cell" : "none"}}>{list[index].location["name"]}</td>
                                       
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