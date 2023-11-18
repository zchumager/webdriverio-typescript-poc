const timeValidation = (time: string) => {
    let regex = new RegExp(/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/);
    return regex.test(time)
}

export {
    timeValidation
}