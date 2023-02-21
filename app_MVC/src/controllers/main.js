const index = (req, res) => {
    res.render('main/index' , {
        msg: 'Olá, mundo!',
    });
}

const profs = (req, res) => {
    const professores = [
        { nome: "David Fernandes", sala: 1234},
        { nome: "Horácio Fernandes", sala: 4321},
        { nome: "Tayana Conte", sala: 6666},
        { nome: "Leandro Galvão", sala: 9999},
    ];
    res.render('main/profs', {
        profs: professores,
    });

}

const about = (req, res) => {
    res.send('Sobre');
}

module.exports = { index, profs, about };
