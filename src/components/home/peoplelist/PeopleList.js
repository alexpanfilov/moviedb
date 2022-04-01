import { React, useState, useEffect } from "react";
import { fetchPeople } from '../../../service';
import Flex from '../../styled_components/Flex';

export default function PeopleList() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setPeople(await fetchPeople());
        };
        fetchApi();
      }, []);
      const displayPeople = people.slice(0,4).map((item) => {
    return (
        <div key={item.id}>
            <img src={item.profileImg} alt={item.title}/>
            <p>{item.name}</p>
            <p>Trading for: {item.known}</p>
        </div>
    )
      })
      return (
          <>
          <h3>Trending persont on this week</h3>
          
      <Flex>
      {displayPeople}
      </Flex>
      </>
      );
}

