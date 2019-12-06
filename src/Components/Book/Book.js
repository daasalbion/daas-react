import React from 'react';

const Book = ({title}) => {
  const onClickHandler = (synthEvent) => console.log(synthEvent);

  return (
    <div id="footer" className="row">
      <div className="col-12">
        <h4 className="text-muted credit" onClick={onClickHandler}>{title}</h4>
      </div>
    </div>
  )
};

export default Book;