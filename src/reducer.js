const initialState = {
    countries: [
        { name: 'India', shortName: 'IN', population: "1324171354" },
        { name: 'China', shortName: 'CN', population: "1403500365" },
        { name: 'Italy', shortName: 'IT', population: "60483973" },
        { name: 'United States', shortName: 'US', population: "327167434" },
        { name: 'Canada', shortName: 'CA', population: "37602103" },
        { name: 'Australia', shortName: 'AU', population: "25475400" },
        { name: 'Germany', shortName: 'DE', population: "83019200" },
        { name: 'Ireland', shortName: 'IE', population: "4857000" },
        { name: 'Mexico', shortName: 'MX', population: "126577691" },
        { name: 'Japan', shortName: 'JP', population: "126317000" },
        { name: 'France', shortName: 'FR', population: "67022000" },
        { name: 'United Kingdom', shortName: 'GB', population: "242495" },
        { name: 'Russia', shortName: 'RU', population: "146793744" },
        { name: 'Nigeria', shortName: 'NG', population: "200962417" },
        { name: 'Thailand', shortName: 'TH', population: "23421342" },
        { name: 'Brazil', shortName: 'BR', population: "210147125" },
        { name: 'Argentina', shortName: 'AG', population: "123123456" },
        { name: 'Kazakhstan', shortName: 'KZ', population: "45241241" },
        { name: 'Bangladesh', shortName: 'BA', population: "3453453345" },
        { name: 'Emirates', shortName: 'EM', population: "345345345" },
    ]
}

export default function rowsReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
};