import React, { Fragment } from 'react';
import { useParams } from 'react-router';

import ClickedPreBuilt from '../components/PreBuilt/ClickedPreBuilt/ClickedPreBuilt';
import DUMMY_DATA from '../DUMMY_DATA';

const PreBuiltDetail = () => {
    const params = useParams();
    const preBuilt = DUMMY_DATA.find(item => item.id === +params.preBuiltId);

    console.log(params);
    console.log(preBuilt);
    return (
        <Fragment>
            <ClickedPreBuilt 
                id={preBuilt.id}
                img={preBuilt.img}
                name={preBuilt.product_name}
                cpu={preBuilt.cpu}
                gpu={preBuilt.gpu}
                motherboard={preBuilt.motherboard}
                ram={preBuilt.ram}
                ssd={preBuilt.ssd}
                cooler={preBuilt.cpu_cooler}
                psu={preBuilt.psu}
                case={preBuilt.case}
                os={preBuilt.os}
                dimension={preBuilt.dimension}
                price={preBuilt.price}
            />
        </Fragment>
    );
};

export default PreBuiltDetail;