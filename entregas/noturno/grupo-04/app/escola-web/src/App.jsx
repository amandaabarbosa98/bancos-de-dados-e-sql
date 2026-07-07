import React, { useState, useEffect } from 'react';
import api from './services/api';
import FilterBar from './components/FilterBar';
import AlunoTable from './components/AlunoTable';

function App() {
    const [alunos, setAlunos] = useState([]);
    const [filterNome, setFilterNome] = useState('');
    const [filterTurma, setFilterTurma] = useState('');
    const [loading, setLoading] = useState(true);

    // Busca os alunos uma única vez ao carregar a página
    useEffect(() => {
        api.get('/alunos')
            .then((response) => {
                setAlunos(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erro ao carregar alunos:", error);
                setLoading(false);
            });
    }, []);

    // Extrai a lista de turmas dinamicamente para o Select com base nos dados recebidos
    const turmasDisponiveis = Array.from(
        new Set(alunos.map((aluno) => aluno.nome_turma).filter(Boolean))
    ).sort();

    // Lógica de filtragem executada puramente em JavaScript
    const alunosFiltrados = alunos.filter((aluno) => {
        const matchesNome = aluno.nome.toLowerCase().includes(filterNome.toLowerCase());
        const matchesTurma = filterTurma === '' || aluno.nome_turma === filterTurma;
        return matchesNome && matchesTurma;
    });

    if (loading) {
        return <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>Carregando dados dos alunos...</div>;
    }

    return (
        <div style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ color: '#2c3e50', borderBottom: '2px solid #2c3e50', paddingBottom: '10px' }}>
                Sistema Escolar - Consulta de Alunos
            </h1>
            
            <FilterBar 
                filterNome={filterNome}
                setFilterNome={setFilterNome}
                filterTurma={filterTurma}
                setFilterTurma={setFilterTurma}
                turmasDisponiveis={turmasDisponiveis}
            />

            <AlunoTable alunos={alunosFiltrados} />
        </div>
    );
}

export default App;