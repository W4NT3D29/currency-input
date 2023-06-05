export const currencyToNumber = (n) => {
    const res = n.replaceAll(",", "");
    return res.slice(1);
};

const formatNumber = (n) => {
    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export function formatCurrency(input) {
    if (input === "") {
        return "";
    }
    if (input.indexOf(".") >= 0) {
        const lSide = formatNumber(input.substring(0, input.indexOf(".")));
        const rSide = formatNumber(input.substring(input.indexOf("."))).substring(0, 2);
        if (lSide === '') {
            return `$0.${rSide}`;
        }
        return `$${lSide}.${rSide}`;
    } else {
        if (input.indexOf('0') !== 1 ) {
            const final = formatNumber(input);
            return `$${final}`;
        }
        return `$0`;
    }
}
