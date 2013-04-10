module "cheerio" {
    export import cheerio = module("cheerio");

    function load(body: string, opts?: CheerioOpt) : CheerioObj;
    function (selector: string, body: string): CheerioObj;
    function (selector: string, context: string, root: string): CheerioObj;

    interface CheerioOpt {
        ignoreWhitespace: bool;
        xmlMode: bool;
        lowerCaseTags: bool;
    }

    interface CheerioObj {
        // Selectors
        (selector: string, context?: string, root?: string): CheerioSelector;
        (selector: string, context?: CheerioObj, root?: string): CheerioSelector;
        (selector: CheerioObj, context?: string, root?: string): CheerioSelector;
        (selector: CheerioObj, context?: CheerioObj, root?: string): CheerioSelector;

        // Rendering
        html(selector?: string): string;

        // Utilities
        root(): CheerioSelector;
        dom(): any;
        isArray(obj: any): bool;
        inArray(elem: any, array: any[]): number;
        makeArray(obj: any): any[];
        each(collection: any, callback: (indexInArray: any, valueOfElement: any) => any): any;
        merge(first: any[], second: any[]): any[];
    }

    interface CheerioSelector {
        // Array functions
        length: number;
        [x: string]: HTMLElement;
        [x: number]: HTMLElement;

        // Attributes
        attr(attributeName: string, value: any): CheerioSelector;
        attr(map: { [key: any]: any; }): string;
        attr(attributeName: string, func: (index: any, attr: any) => any): CheerioSelector;

        removeAttr(attributeName: any): CheerioSelector;
    
        hasClass(className: string): bool;

        addClass(classNames: string): CheerioSelector;
        addClass(func: (index: any, currentClass: any) => CheerioSelector);

        removeClass(className?: any): CheerioSelector;
        removeClass(func: (index: any, cls: any) => any): CheerioSelector;

        // Traversing
        find(selector: string): CheerioSelector;
        find(element: any): CheerioSelector;
        find(obj: CheerioSelector): CheerioSelector;

        parent(selector?: string): CheerioSelector;

        next(selector?: string): CheerioSelector;

        prev(selector?: string): CheerioSelector;

        siblings(selector?: string): CheerioSelector;

        children(selector?: any): CheerioSelector;
    
        each(func: (index: any, elem: Element) => CheerioSelector);

        map(callback: (index: any, domElement: Element) =>any): CheerioSelector;

        filter(selector: string): CheerioSelector;
        filter(func: (index: any) =>any): CheerioSelector;
        filter(element: any): CheerioSelector;
        filter(obj: CheerioSelector): CheerioSelector;

        first(): CheerioSelector;

        last(): CheerioSelector;

        eq(index: number): CheerioSelector;

        // Manipulation
        append(...content: any[]): CheerioSelector;
        append(func: (index: any, html: any) => any);

        prepend(...content: any[]): CheerioSelector;
        prepend(func: (index: any, html: any) =>any): CheerioSelector;

        after(...content: any[]): CheerioSelector;
        after(func: (index: any) => any);

        before(...content: any[]): CheerioSelector;
        before(func: (index: any) => any);

        remove(selector?: any): CheerioSelector;

        replaceWith(content: any): CheerioSelector;

        empty(): CheerioSelector;

        html(htmlString: string): CheerioSelector;
        html(): string;
    
        text(textString: string): CheerioSelector;
        text(): string;

        // Miscellaneous
        toArray(): any[];

        clone(): CheerioSelector;
    }
}