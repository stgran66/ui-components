import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary rounded onClick={handleClose}>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button primary rounded onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta
        tellus at arcu viverra, eu auctor ante consequat. Duis luctus, est id
        egestas imperdiet, leo nisi imperdiet libero, ut ultrices turpis mauris
        ac massa. Fusce consequat nibh velit, eu posuere turpis ornare vitae.
        Nulla eros nisl, semper at congue non, rhoncus non elit. Nunc at dui
        nibh. Donec vestibulum tortor ac placerat tristique. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta
        tellus at arcu viverra, eu auctor ante consequat. Duis luctus, est id
        egestas imperdiet, leo nisi imperdiet libero, ut ultrices turpis mauris
        ac massa. Fusce consequat nibh velit, eu posuere turpis ornare vitae.
        Nulla eros nisl, semper at congue non, rhoncus non elit. Nunc at dui
        nibh. Donec vestibulum tortor ac placerat tristique. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta
        tellus at arcu viverra, eu auctor ante consequat. Duis luctus, est id
        egestas imperdiet, leo nisi imperdiet libero, ut ultrices turpis mauris
        ac massa. Fusce consequat nibh velit, eu posuere turpis ornare vitae.
        Nulla eros nisl, semper at congue non, rhoncus non elit. Nunc at dui
        nibh. Donec vestibulum tortor ac placerat tristique. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta
        tellus at arcu viverra, eu auctor ante consequat. Duis luctus, est id
        egestas imperdiet, leo nisi imperdiet libero, ut ultrices turpis mauris
        ac massa. Fusce consequat nibh velit, eu posuere turpis ornare vitae.
        Nulla eros nisl, semper at congue non, rhoncus non elit. Nunc at dui
        nibh. Donec vestibulum tortor ac placerat tristique. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta
        tellus at arcu viverra, eu auctor ante consequat. Duis luctus, est id
        egestas imperdiet, leo nisi imperdiet libero, ut ultrices turpis mauris
        ac massa. Fusce consequat nibh velit, eu posuere turpis ornare vitae.
        Nulla eros nisl, semper at congue non, rhoncus non elit. Nunc at dui
        nibh. Donec vestibulum tortor ac placerat tristique. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta
        tellus at arcu viverra, eu auctor ante consequat. Duis luctus, est id
        egestas imperdiet, leo nisi imperdiet libero, ut ultrices turpis mauris
        ac massa. Fusce consequat nibh velit, eu posuere turpis ornare vitae.
        Nulla eros nisl, semper at congue non, rhoncus non elit. Nunc at dui
        nibh. Donec vestibulum tortor ac placerat tristique. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta
        tellus at arcu viverra, eu auctor ante consequat. Duis luctus, est id
        egestas imperdiet, leo nisi imperdiet libero, ut ultrices turpis mauris
        ac massa. Fusce consequat nibh velit, eu posuere turpis ornare vitae.
        Nulla eros nisl, semper at congue non, rhoncus non elit. Nunc at dui
        nibh. Donec vestibulum tortor ac placerat tristique. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta
        tellus at arcu viverra, eu auctor ante consequat. Duis luctus, est id
        egestas imperdiet, leo nisi imperdiet libero, ut ultrices turpis mauris
        ac massa. Fusce consequat nibh velit, eu posuere turpis ornare vitae.
        Nulla eros nisl, semper at congue non, rhoncus non elit. Nunc at dui
        nibh. Donec vestibulum tortor ac placerat tristique. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta
        tellus at arcu viverra, eu auctor ante consequat. Duis luctus, est id
        egestas imperdiet, leo nisi imperdiet libero, ut ultrices turpis mauris
        ac massa. Fusce consequat nibh velit, eu posuere turpis ornare vitae.
        Nulla eros nisl, semper at congue non, rhoncus non elit. Nunc at dui
        nibh. Donec vestibulum tortor ac placerat tristique. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta
        tellus at arcu viverra, eu auctor ante consequat. Duis luctus, est id
        egestas imperdiet, leo nisi imperdiet libero, ut ultrices turpis mauris
        ac massa. Fusce consequat nibh velit, eu posuere turpis ornare vitae.
        Nulla eros nisl, semper at congue non, rhoncus non elit. Nunc at dui
        nibh. Donec vestibulum tortor ac placerat tristique. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta
        tellus at arcu viverra, eu auctor ante consequat. Duis luctus, est id
        egestas imperdiet, leo nisi imperdiet libero, ut ultrices turpis mauris
        ac massa. Fusce consequat nibh velit, eu posuere turpis ornare vitae.
        Nulla eros nisl, semper at congue non, rhoncus non elit. Nunc at dui
        nibh. Donec vestibulum tortor ac placerat tristique. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}

export default ModalPage;
