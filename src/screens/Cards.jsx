import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';
import '../styles/cards.css';
import { useWebsocket } from '../hook/useWebsocket';

const Cards = ({ searchText }) => {
  const [projects, setProjects] = useState([]);
  const { websocket } = useWebsocket();

  useEffect(() => {
    websocket.emit('get_project_list_event', {});

    websocket.on('new_project_list_event', (data) => {
      setProjects(JSON.parse(data));
    });
  }, []);

  return (
    <>
      <Sidebar></Sidebar>
      <div className='cards'>
        {projects
          .filter((project) => project.responsibleConstructor === null)
          .map((project) => (
            <Card
              key={project.id}
              id={project.id}
              title={project.title}
              img={project.imageUrl}
              subtitle={project.type}
              text={project.description}
              price={project.budget}
            />
          ))}
      </div>
    </>
  );
};

export default Cards;
