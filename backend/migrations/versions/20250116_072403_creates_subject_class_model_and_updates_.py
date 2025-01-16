"""creates subject class model and updates progress class model with subject_id foreign key and relationship

Revision ID: c836340c2722
Revises: c6e00ccec055
Create Date: 2025-01-16 07:24:03.405906

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c836340c2722'
down_revision = 'c6e00ccec055'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('subjects',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('description', sa.String(length=255), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('progress', schema=None) as batch_op:
        batch_op.add_column(sa.Column('subject_id', sa.Integer(), nullable=False))
        batch_op.create_foreign_key(None, 'subjects', ['subject_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('progress', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_column('subject_id')

    op.drop_table('subjects')
    # ### end Alembic commands ###
