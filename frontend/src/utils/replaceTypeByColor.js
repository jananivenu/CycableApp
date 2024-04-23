export default function incidentTypeToColor(type) {
    const typeToColor = {
        violations: 'main',
        bicycle_accident: 'red',
        bicycle_theft: 'blue',
        near_miss: 'orange'
    };

    return typeToColor[type]
}