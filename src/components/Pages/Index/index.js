import React from "react";

const fieldStyle = {
    fontSize: 12,
    marginTop: 5
};
const labelStyle = {
    padding: 5
};

export default () => {
    return (
        <div>
            {"Form Sample!!!"}

            <form>
                <div style={fieldStyle}>
                    <label htmlFor="name" style={labelStyle}>Name</label>
                    <input type="text" id="name" />
                </div>
            </form>
        </div>
    );
}