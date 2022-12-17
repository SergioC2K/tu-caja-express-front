export interface IResAgencies {
    status:  number;
    message: string;
    data:    DataAgen;
}

export interface DataAgen {
    content:          IAgency[];
    pageable:         Pageable;
    totalPages:       number;
    totalElements:    number;
    last:             boolean;
    number:           number;
    size:             number;
    sort:             Sort;
    numberOfElements: number;
    first:            boolean;
    empty:            boolean;
}

export interface IAgency {
    id:              number;
    agencyName:      string;
    code:            string;
    address:         string;
    municipalityId:  MunicipalityID;
    zipCode:         string;
    telephone1:      string;
    telephone2:      string;
    fax:             string;
    mail:            string;
    webPage:         string;
    weightForm:      string;
    logoUrl:         string;
    status:          boolean;
    principalAgency: boolean;
}

export interface MunicipalityID {
    id:               number;
    departmentId:     DepartmentID;
    code:             string;
    municipalityName: string;
    status:           boolean;
}

export interface DepartmentID {
    id:             number;
    countryId:      CountryID;
    code:           string;
    departmentName: string;
    status:         boolean;
}

export interface CountryID {
    id:          number;
    code:        string;
    countryName: string;
    status:      boolean;
}

export interface Pageable {
    sort:       Sort;
    pageNumber: number;
    pageSize:   number;
    offset:     number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface Sort {
    sorted:   boolean;
    unsorted: boolean;
    empty:    boolean;
}
