

// REST PARAMETERS
export const clases = (...clases) => {
    // console.log(clases)
    // console.log(clases.filter(c => typeof c === 'string').join(' '))
    return clases.filter(c => typeof c === 'string').join(' ')
}