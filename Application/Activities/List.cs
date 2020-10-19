using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    public class List
    {
        public class Qurey : IRequest<List<Activity>> { }

        public class Handler : IRequestHandler<Qurey, List<Activity>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task<List<Activity>> Handle(Qurey request, CancellationToken cancellationToken)
            {
                var activities = await _context.Activities.ToListAsync();

                return activities;
            }
        }
    }
}