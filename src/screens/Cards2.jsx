import React, { useEffect, useState } from 'react';
import Card from '../components/Card2';
import Sidebar from '../components/Sidebar';
import '../styles/cards.css';
import { useWebsocket } from '../hook/useWebsocket';

const Cards2 = ({ searchText }) => {
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
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            img={project.imageUrl}
            subtitle={project.type}
            text={project.description}
            price={project.budget}
            responsibleConstructor={project.responsibleConstructor}
          />
        ))}
      </div>
    </>
  );
};

export default Cards2;
