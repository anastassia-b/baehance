import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ProjectInfo extends React.Component {
  componentDidMount() {
    const id = this.props.project.user_id;
    this.props.fetchUser(id);
  }

  render() {
    const project = this.props.project;
    const user = this.props.user;

    return (
    <aside className="project-info">
      <Link to={`/users/${user.id}`}>
        <img className="avatar" src={user.avatar_url}/>
      </Link>
      <div className="about">
        <h3>{user.username}</h3>
        <h4>{project.description}</h4>
        <p>Lorem ipsum dolor sit amet, noster verear pro cu, mea eu vitae latine contentiones. Duo in modo magna aeterno, eu dico definiebas ius, ei postea sensibus consequat sea. Ne commodo electram iudicabit duo, vim et illum dissentiet. Sit cu labore disputando, eu mea dolorum invidunt. Utinam diceret vim at. Ne vim autem vocent, ne est praesent iracundia. No noluisse abhorreant eos, has ei copiosae sapientem intellegam.
        </p>
      </div>
    </aside>
    );
  }
}

export default withRouter(ProjectInfo);