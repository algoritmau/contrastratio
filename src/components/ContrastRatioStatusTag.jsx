import React from 'react';

function ContrastRatioStatusTag({ status }) {
  if (status === 'pass') {
    return (
      <div className='contrastRatioStatusTag contrastRatioStatusTag--pass'>
        <span className='contrastRatioStatusTag__text contrastRatioStatusTag__text--pass'>
          Pass
        </span>
      </div>
    );
  } else {
    return (
      <div className='contrastRatioStatusTag contrastRatioStatusTag--fail'>
        <span className='contrastRatioStatusTag__text contrastRatioStatusTag__text--fail'>
          Fail
        </span>
      </div>
    );
  }
}

export default ContrastRatioStatusTag;
