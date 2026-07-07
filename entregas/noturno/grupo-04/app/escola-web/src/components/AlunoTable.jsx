import React from 'react';

function AlunoTable({ alunos }) {
    return (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <thead>
                <tr style={{ backgroundColor: '#f2f2f2', textAlign: 'left' }}>
                    <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>ID</th>
                    <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Nome</th>
                    <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Email</th>
                    <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Cidade</th>
                    <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Turma</th>
                </tr>
            </thead>
            <tbody>
                {alunos.length > 0 ? (
                    alunos.map((aluno) => (
                        <tr key={aluno.id_aluno} style={{ borderBottom: '1px solid #ddd' }}>
                            <td style={{ padding: '12px' }}>{aluno.id_aluno}</td>
                            <td style={{ padding: '12px' }}>{aluno.nome}</td>
                            <td style={{ padding: '12px' }}>{aluno.email}</td>
                            <td style={{ padding: '12px' }}>{aluno.cidade}</td>
                            <td style={{ padding: '12px', fontWeight: 'bold', color: '#333' }}>
                                {aluno.nome_turma || 'Sem Turma'}
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5" style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                            Nenhum aluno encontrado com os filtros aplicados.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default AlunoTable;