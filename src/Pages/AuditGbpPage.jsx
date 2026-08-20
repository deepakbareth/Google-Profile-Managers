import React from 'react';
import Banner from '../Components/ReusableComp/Banner';
import AuditForm from '../Components/AuditGbp/AuditForm';

const AuditGbpPage = () => {
    return (
        <div className="font-sans bg-slate-50 min-h-screen pb-20">
            <Banner data={{
                titlePrefix: "Get Your",
                titleHighlight: "Website",
                subtitle: "We'll review your property for hands-off management and provide an expert audit."
            }} />

            {/* Form Section */}
            <AuditForm />
        </div>
    );
};

export default AuditGbpPage;
