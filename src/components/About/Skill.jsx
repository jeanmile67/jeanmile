import React from 'react';
import styled from 'styled-components';

const Progress = styled.div`
  height: 17px;
  margin-bottom: 0;
  overflow: hidden;
  background-color: #f1f1f1;
  border-radius: 15px;
  -webkit-box-shadow: none;
  box-shadow: none;

  .progress-bar {
    border-radius: 15px;
    float: left;
    width: 0;
    height: 100%;
    font-size: 12px;
    line-height: 7px;
    color: #fff;
    text-align: center;
    background-color: $colordark;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-transition: width 0.6s ease;
    -o-transition: width 0.6s ease;
    transition: width 0.6s ease;
  }
`;

const SkillWrapper = styled.div`
  .skill-info {
    h4 {
      font-size: 16px;
      font-weight: 500;
    }

    span {
      font-size: 14px;
    }
  }
`;

const Skill = ({ progress, isVisible }) => {
  const { title, percantage, progressColor } = progress;
  // const winWidth = window.innerWidth;
  // eslint-disable-next-line arrow-body-style
  const progressQuery = () => {
    // if (winWidth && winWidth > 767) {
    //   return (
    //     <div
    //       className="progress-bar data-background"
    //       style={
    //         isVisible
    //           ? {
    //               width: `${percantage}%`,
    //               background: progressColor,
    //             }
    //           : { width: 0, background: progressColor }
    //       }
    //     />
    //   );
    // }
    return (
      <div
        className="progress-bar data-background"
        style={{
          width: `${percantage}%`,
          background: progressColor,
        }}
      />
    );
  };

  return (
    <SkillWrapper>
      <div className="skill-info clearfix">
        <h4 className="float-left mb-3 mt-0">{title}</h4>
        <span className="float-right">{percantage}%</span>
      </div>
      <Progress>{progressQuery()}</Progress>
    </SkillWrapper>
  );
};

export default Skill;
