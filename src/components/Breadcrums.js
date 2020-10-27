import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Bready = styled.div`
  width: 100%;
  background: var(--altColour);
  padding: 0.25rem 0;

  .breadcrumb {
    width: 100%;
    margin: 0 auto;
    ul {
      width: 90%;
      margin: 0 auto;
      padding: 0;
      display: flex;
      list-style: none;
      li {
        font-weight: 500;
        font-size: 0.85rem;
        margin-right: 5px;
        text-transform: capitalize;
        a {
          text-decoration: none;
        }
      }
    }
  }
`;

const Bread = ({ breaddata }) => {
  const elementsNew = [];

  breaddata.crumbs.forEach(createdBread);
  function createdBread(item) {
    const newlast = item.crumbLabel.replace(/-/g, ' ');
    elementsNew.push({ pathname: item.pathname, crumlabel: newlast });
  }
  // console.log(elementsNew)

  return (
    <>
      <Bready>
        <div className="breadcrumb">
          <ul c>
            {elementsNew.map((value, index) => (
              <li key={index} className="breadcrumb__wrapper__inner">
                <Link key={index} to={`${value.pathname}`}>
                  {value.crumlabel} <span> / </span>{' '}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Bready>
    </>
  );
};

export default Bread;
